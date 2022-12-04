import React,{useState,useEffect} from 'react'







function localItem() {
  let list = localStorage.getItem("list");
  console.log(list);
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }

}
function ToDo() {
  const [input, setInput] = useState("");
  const [addItem, setAddItem] = useState(localItem());
  const [toggle, setToggle] = useState(true);
  const [id, setId] = useState(null)
  

  // editupdate
function editupdate(){
  if(input && !toggle){
   
    console.log(id)
    console.log(input);
   let list =  addItem.map((element)=>{
      if(element.id === id){ return  {...element,name:input}} return element ; 
    })
   console.log(list); 

   setAddItem(list);
setInput("")
setToggle(true);
setId(null)
  }
}
  //input handler
  function inputHandler() {
    if (!input) {
    } else {
      let allinput = { id: new Date().getTime().toString(), name: input };
      setAddItem([...addItem, allinput]);
      setInput("");
      console.log(addItem);
    }
  }

  {/*deletehandler*/}
  function deletehandler(id) {
    let newitem = addItem.filter((ele) => {
      return ele.id !== id;
    });
    setAddItem(newitem);
    
    
  }
  // updatehandler
  function updatehandler(id){
  let data= addItem.find((ele)=>{return ele.id===id})
  setId(id);
  setInput(data.name);
  setToggle(false)
  }
  useEffect(() => {
  localStorage.setItem("list",JSON.stringify(addItem))
  }, [addItem])
  

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center my-2">
          <div className="col-5">
            <div className="inline">
              <input
              type="text"
                placeholder="ADD TODO"
                className="form-control mx-2"
                value={ input }
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
                { toggle ? <i className="bi bi-plus-square" onClick={inputHandler} /> :<i
                  className="bi bi-arrow-up-right-square"
                  onClick={editupdate}
                />} 
              
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-5 mb-5"></hr>
      {addItem.map((item) => {
        return (
          <div key={item.id}>
            <div className="row justify-content-center my-2">
              <div className="col-5">
                <div className="inline">
                  <input
                    className="form-control mx-2 my-1"
                    value={item.name}
                  />
                  <i
                  className="bi bi-arrow-up-right-square"
                  onClick={() => {
                    updatehandler(item.id);
                  }}
                ></i>
                  <i
                  className="bi bi-x-square mx-3"
                  onClick={() => {
                    deletehandler(item.id);
                  }}
                ></i>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="inline">
        <button
          type="button"
          className="btn btn-primary btn-lg my-2"
          onClick={() => {
            setAddItem([]);
          }}
        >
          CLEARALL
        </button>
      </div>
    </>
  );
}

export default ToDo;