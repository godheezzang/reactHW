import { useEffect } from "react";

function Footer(){

  useEffect(()=>{
    console.log('++++ Footer 마운트/업데이트');
    return ()=> console.log('---- Footer 언마운트');
  })
  return (
    <footer>
      <p>Front-End School 9기</p>
    </footer>
  );
}

export default Footer;