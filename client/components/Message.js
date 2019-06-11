function NoSuggestions(props){
    return <em>No suggestions, you're on your own!</em>
}

function AddMe(props){
    return <em>Add success. See DB values.</em>
}

function DeleteMe(props){
    return <em>Delete success. See DB values.</em>
}

function FailToAdd(props){
    return <em>Fail to add new item... Maybe not uniqe (For example: aa->string and aa->number are not allow)</em>
}

function Message(props){
    const flag = props.action;
    if (flag === 'addMeClick'){
        return <AddMe/>;
    }
    else if (flag === 'deleteMeClick'){
        return <DeleteMe/>;
    }
    else if (flag === 'failToAdd'){
        return <FailToAdd/>;
    } 
    return <NoSuggestions/>;
}

export default Message;