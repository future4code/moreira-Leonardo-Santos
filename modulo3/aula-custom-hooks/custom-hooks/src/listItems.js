const listItems = (list) => {
    list.map((item, index) => {
        return (<li key={index}>{item.name}</li>)
    });
};
export default listItems;