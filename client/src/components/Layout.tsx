import { SetStateAction, useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Terminal from './Terminal';
import { javascriptDefault } from '../Snippets/BinarySearch';
import { languageOptions } from '../contants/Languages';
import useKeyPress from '../hooks/useKey';
import LanguagesDropdown from './LanguangeDropDown';
import CustomInput from './CustomInput';
import { Button } from './Button';
import { classnames } from '../utils/gernal';
import OutputDetails from './OutPut';
import OutputWindow from './OutputBox';
import axios from 'axios';


const Layout = () => {
  const [code, setCode] = useState(javascriptDefault);
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState<boolean>(false);
  const [language, setLanguage] = useState(languageOptions[0]);

  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");

  const onSelectChange = (selectedOption: SetStateAction<{ id: number; name: string; label: string; value: string; }>) => {
    console.log("Selected Option:", selectedOption);
    setLanguage(selectedOption);
  };

  useEffect(() => {
    if (enterPress && ctrlPress) {
      console.log("Enter pressed:", enterPress);
      console.log("Control pressed:", ctrlPress);
      handleCompile();
    }
  }, [ctrlPress, enterPress]);



  const onChange = (action: unknown, data: SetStateAction<string>) => {
    switch (action) {
      case "code":
        setCode(data);
        break;
      default:
        console.warn("Case not handled!", action, data);
    }
  };



  const handleCompile = async () => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa(customInput),
    };
    const options = {
      method: "POST",
      url: process.env.REACT_APP_RAPID_API_URL,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("res.data", response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        const error = err.response ? err.response.data : err;
        // get error status
        const status = err.response.status;
        console.log("status", status);
        if (status === 429) {
          console.log("too many requests", status);

          showErrorToast(
            `Quota of 100 requests exceeded for the Day! Please read the blog on freeCodeCamp to learn how to setup your own RAPID API Judge0!`,
            10000
          );
        }
        setProcessing(false);
        console.log("catch block...", error);
      });
  };



  const checkStatus = async (token: string) => {
    const options = {
      method: "GET",
      url: process.env.REACT_APP_RAPID_API_URL + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };
    try {
      const response = await axios.request(options);
      const statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        showSuccessToast(`Compiled Successfully!`);
        console.log("response.data", response.data);
        return;
      }
    } catch (err) {
      console.log("err", err);
      setProcessing(false);
      showErrorToast(`Something went wrong! Please try again.`, 1);
    }
  };



  const showSuccessToast = (msg: string) => {
    toast.success(msg || `Compiled Successfully!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const showErrorToast = (msg: string, timer: number) => {
    toast.error(msg || `Something went wrong! Please try again.`, {
      position: "top-right",
      autoClose: timer ? timer : 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">

      <div className="flex flex-grow p-4">
        <div className="w-full flex flex-col space-y-4">
          <LanguagesDropdown
            onSelectChange={() => onSelectChange}
          />
          <Terminal
            language={language.value}
            code={code}
            onChange={() => onChange}
            theme={"cobalt"}
          />
          <CustomInput
            customInput={customInput}
            setCustomInput={setCustomInput}
          />
          <Button
            className={classnames('bg-blue-500 text-white px-4 py-2 rounded', processing ? 'loading' : '')}
            onClick={handleCompile}
          >
            {processing ? 'Compiling...' : 'Compile'}
          </Button>
          <OutputDetails
            outputDetails={outputDetails}
          />
          <OutputWindow
            outputDetails={outputDetails}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Layout;
