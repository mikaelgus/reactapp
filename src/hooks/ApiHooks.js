import {useEffect, useState} from 'react';
import {baseUrl} from '../utils/variables';

const fetchJson = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    if (response.ok) {
      return json;
    } else {
      const message = json.error;
      throw new Error(message);
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const getMedia = async () => {
    try {
      const media = await await fetchJson(baseUrl + 'media');
      const allFiles = await Promise.all(
        media.map(async (file) => {
          return await fetchJson(`${baseUrl}media/${file.file_id}`);
        })
      );
      setMediaArray(allFiles);
    } catch (err) {
      console.log(err.message);
      alert('database error');
    }
  };
  useEffect(() => {
    getMedia();
  }, []);
  return {mediaArray};
};

const useUser = () => {
  const getUser = () => {};

  const postUser = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    return await fetchJson(baseUrl + 'users', fetchOptions);
  };

  return {getUser, postUser};
};

const userLogin = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    return await fetchJson(baseUrl + 'login', fetchOptions);
  };

  return {postLogin};
};

export {useMedia, useUser, userLogin};
