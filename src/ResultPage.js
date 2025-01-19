import React, { useState, useEffect } from 'react';


function ResultPage() {

  const t=localStorage.getItem('formData')
  const o=localStorage.getItem('operationResult')
  return(<>
  <h1>{t}</h1>
  <h1>{o}</h1>
</>
)
  
}

export default ResultPage;
