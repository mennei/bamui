'use strict';
const conf = require("./../../server.config");
import fetch from 'isomorphic-unfetch';

const updateMongo = async (requestBody) => {
    console.log(requestBody);
    try {
        const {
            action, 
            addObj,
            delObj,
            updateObj,
            prevObj
        } = requestBody;
        const url = conf.UPDATE_URL;
        const body = {
                action: action,
                addObj: addObj,
                delObj: delObj,
                updateObj: updateObj,
                prevObj: prevObj
        }
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: action,
                addObj: addObj,
                delObj: delObj,
                updateObj: updateObj,
                prevObj: prevObj
            })
        }
        console.log(config);
        const response = await fetch(url, config);
        return response.ok;
    }
    catch(e) {
        return false;
    }
  }
  
export {
    updateMongo,
}