const RestrauntItemList=(props)=>{
    const name = props.name;
    const item = props.item;
    return (
        <div>
            <h1>{name}</h1>
            <h2>{item}</h2>
        </div>
    )
}
export default RestrauntItemList;