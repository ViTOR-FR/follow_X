const maskCPF = (v) => {
    v = v.replace(/\D/g, "")
  
    if (v.length <= 11) {
      v = v.replace(/(\d{3})(\d)/, "$1.$2")
      v = v.replace(/(\d{3})(\d)/, "$1.$2")
      v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    }
    
    return v
}

export default maskCPF;