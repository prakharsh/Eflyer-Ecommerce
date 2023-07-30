import React,{useEffect, useState,useRef} from 'react'
import Navbar from './Navbar'
import DisplayProd from './DisplayProd';
import styles from '../styles/Home.module.css'
import axios from 'axios' ;
import {Dropdown} from 'react-bootstrap'
function Home() {
   const [products, setProducts]=useState([]) ;
   const [filteredProduct, setFilter]=useState([]) ;
   const [curCategory,setCategory]=useState("All Category")
   const [Lang, setLang]=useState("English")
   const searchRef=useRef('')

   useEffect(()=>{
    (async function getProducts(){
     const res=await axios.get('https://fakestoreapi.com/products') ;
     setProducts([...res.data])
     setFilter([...res.data])
    }())
   },[])

  function searchProduct(){
    if(searchRef.current.value===''){ 
      setFilter([...products]) ;
      return ;
    }
    let filtered_prod=filteredProduct.filter((obj)=>{
      let prodTitle=obj.title.toLowerCase() ;
      return  prodTitle.includes(searchRef.current.value.toLowerCase());
    })
    setFilter([...filtered_prod]) ;
  }

  function selectCategory(val){
     setCategory(val)
     let filtered_prod=products.filter((obj)=>{
          return obj.category===val.toLowerCase() || val==="All Category"
     }) ;
      setFilter([...filtered_prod]) ;
  }

  function changeLang(val){
       setLang(val) ;
  }
  return (
    <div>
    <div className={styles.main}>
    <Navbar/>

    <div className={styles.logo}>
        <img src="./images/logo.png" alt=""/>
    </div>

    <div className={styles.home_menu}>
    <img src="./images/toggle-icon.png" className={styles.toggle_icon} alt=""/>
    <Dropdown onSelect={selectCategory} className={styles.dropdown}>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic" className={styles.dropdown_banner} >
          {curCategory}
        </Dropdown.Toggle>
        <Dropdown.Menu  className={styles.dropdown_menu}>
          <Dropdown.Item eventKey="All Category" >All Category</Dropdown.Item>
          <Dropdown.Item eventKey="Electronics">Electronics</Dropdown.Item>
          <Dropdown.Item eventKey="Jewelery">Jewelery</Dropdown.Item>
          <Dropdown.Item eventKey="Men's Clothing">Men's Clothing</Dropdown.Item>
          <Dropdown.Item eventKey="Women's Clothing">Women's Clothing</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    <div className={styles.search_wrapper}>
    <input type="text" className={styles.search} placeholder="Search this blog" ref={searchRef}></input>
    <button className={`btn btn-secondary`} type="button" style={{"backgroundColor": "#f26522", "borderColor":"#f26522"}}
    onClick={searchProduct}>
            <i className="fa fa-search"></i>
    </button>
    </div>
    <div className={styles.lang_wrapper}>
        <Dropdown onSelect={changeLang} className={styles.dropdown}>
          <Dropdown.Toggle  id="dropdown-basic" className={styles.lang_dropdown_banner} >
            {Lang}
          </Dropdown.Toggle>
          <Dropdown.Menu  className={styles.dropdown_menu}>
            <Dropdown.Item eventKey="English" >English</Dropdown.Item>
            <Dropdown.Item eventKey="French">French</Dropdown.Item>
            <Dropdown.Item eventKey="Hindi">Hindi</Dropdown.Item>
    
            </Dropdown.Menu>
        </Dropdown>
        <div className={styles.cart_wrapper}>
          <i className={`fa fa-shopping-cart ${styles.cart_icon}`} aria-hidden="true"></i>
          <span className={`padding_10 ${styles.cart_text}`}>Cart</span>

          <i className={`fa fa-user ${styles.cart_icon}`} aria-hidden="true"></i>
          <span className={`padding_10 ${styles.cart_text}`}>Cart</span>
        </div>
    </div>
  </div>

    <div className={styles.center_text_con}>
      <h1 className={styles.center_text}>Get Start Your Favorite Shopping</h1>
      <button type="button" className={`btn btn-dark ${styles.center_btn}`}>Buy Now</button>
    </div>
    </div>
     <h1 className={styles.category_heading}>{curCategory}</h1>
    <DisplayProd prod={filteredProduct}/>
    <footer className={styles.footer}>
    <div className={styles.logo}>
        <img src="./images/logo.png" alt=""/>
    </div>
    </footer>
    </div>
  )
}

export default Home