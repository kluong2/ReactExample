import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function formatList(data) {
var hobbies = '';

for(var i = 0; i < data.hobbyList.length; i++)
{
	if(i === data.hobbyList.length - 1)
	{
		hobbies = hobbies + data.hobbyList[i];
	}
	else
	{
		hobbies = hobbies + data.hobbyList[i] + '\n';
	}

}
  const newText = hobbies.split('\n').map(str => <li>{str}</li>);
	return newText;
};



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export {formatList};
reportWebVitals();


