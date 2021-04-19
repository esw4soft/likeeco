  $(".fixbutton").click(function(){
    ScrollToTop()
  })
  
  // 返回最上面
  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }