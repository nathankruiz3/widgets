import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = (props) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    const doTranslation = async () => {
      const response = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: props.text,
            target: props.language.value,
            key: API_KEY,
          },
        }
      );
      setTranslated(response.data.data.translations[0].translatedText);
    };
    const timeoutID = setTimeout(() => {
      if (props.text) {
        doTranslation();
      }
    }, 500);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [props.language, props.text]);

  return <h2 style={{ color: "white" }}>{translated}</h2>;
};

export default Convert;
