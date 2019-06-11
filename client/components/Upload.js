import React, { Component, Fragment } from "react";
import ReactDOM from 'react-dom';
import { updateMongo } from '../clientActions/actions';

let { node, input, preview, products, fileContent } = {};
const fileTypes = [
    'text/plain'
];
let delta = [];

class Upload extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        node = ReactDOM.findDOMNode(this);
        input = node.querySelector('input');
        preview = node.querySelector('.preview');
        products = this.props.products;
    }

    displayFile() {
        while (preview.firstChild) {
            preview.removeChild(preview.firstChild);
        }

        const curFiles = input.files;
        if (curFiles.length === 0) {
            const para = document.createElement('em');
            para.textContent = 'No files currently selected for upload';
            preview.appendChild(para);
        } else {
            const content = document.createElement('div');
            preview.appendChild(content);
            const item = document.createElement('div');
            const para = document.createElement('em');
            if (validFileType(curFiles[0])) {
                para.textContent = 'File name ' + curFiles[0].name + ', file size ' + returnFileSize(curFiles[0].size) + '.';
                const reader = new FileReader();
                const txt = document.createElement('textarea');
                reader.onload = (e) => {
                    txt.value = e.target.result;
                    txt.className = 'file-content';
                    txt.rows = '10';
                    txt.cols = '50';
                    txt.onselect = (e) => {
                        let l = txt.selectionEnd - txt.selectionStart;
                        fileContent = txt.value.substr(txt.selectionStart, l).trim();
                    }
                }
                reader.readAsText(curFiles[0]);
                item.appendChild(para);
                para.appendChild(txt);
            } else {
                para.textContent = 'File name ' + curFiles[i].name + ': Not a valid file type. Update your selection.';
                item.appendChild(para);
            }
            content.appendChild(item);
        }
    }

    handleSubmit = async (e) => {
        if (fileContent !== undefined) {
            fileContent = JSON.parse(fileContent);
        }
        delta = mixed(products, fileContent);
        console.log(delta);
        fileContent = [];

        const action = 'addMeClick';
        delta.forEach(async(addObj) => {
            const response = await updateMongo({
                action,
                addObj
            });
            console.log(response);
        });
        window.location.reload();
    }

    render() {
        return (
            <Fragment>
                <div>
                    <div>
                        <input onChange={this.displayFile} type="file" accept=".txt" />
                    </div>
                    <div className="preview">
                        <em>No file currently selected for upload</em>
                    </div>
                    <div>
                        <button onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

function validFileType(file) {
    if (file.type === fileTypes[0]) {
        return true;
    }
    return false;
}

function returnFileSize(number) {
    if (number < 1024) {
        return number + 'bytes';
    } else if (number >= 1024 && number < 1048576) {
        return (number / 1024).toFixed(1) + 'KB';
    } else if (number >= 1048576) {
        return (number / 1048576).toFixed(1) + 'MB';
    }
}

function mixed(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    let dis1 = [...new Set(arr1.map(item => item.name))];
    console.log(dis1);
    let dis2 = [...new Set(arr2.map(item => item.name))];
    console.log(dis2);
    let result = [];
    arr3.map((a)=> {
        if (!dis1.includes(a.name) && dis2.includes(a.name)){
            result.push(a);
        }
    });
    console.log(result);
    return result;
}


export default Upload;