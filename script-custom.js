function moistureGradients(id, value) {
  let list = document.getElementById('list');
  if (list) {
    console.log(value);
    if (value >= 95) {
      document.getElementById(id).style.background = settings.styles.colorTrue;
    } else if (value <= 5) {
      document.getElementById(id).style.background = settings.styles.colorFalse;
    } else {
      document.getElementById(id).style.background = 'linear-gradient(0deg, '+ settings.styles.colorTrue +' 0%, '+ settings.styles.colorFalse +' '+ value +'%)';  
    }
  }
}