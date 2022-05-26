import styles from "./Button.module.css";


function Button({ title, onClick, disabled, id, page , setPage , setOrder, order}) {



  const clicking = (name)=>{
    console.log(name);
       if(name=== "NEXT"){
        setPage(page + 1)
        console.log(page);
       }
       if(name==="PREV"){
        if(page <= 1){
          setPage(1)
        }else{
          setPage(page - 1)
        }
       }
       if(name === "SORT_BUTTON"){
         if(order === "ASC"){
           setOrder("DESC")
         }else{
           setOrder("ASC")
         }
       }
       
  }



  return (
    <button id={id} data-testid="button-component" className={styles.button} onClick={()=>clicking(id)} disabled={disabled ? disabled : ""}>
      {title}
    </button>
  );
}

export default Button;
