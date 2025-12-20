const fetching = async (event) => {
  //   console.log("hello ");
  const response = await fetch(
    "https://api.aradpacking.com/v1/products/%DA%A9%D8%A7%D9%BE-%DA%A9%DB%8C%DA%A9"
  );
  const data = await response.json();
  const jData = JSON.stringify(data, null, 2);
  console.log(jData);

  
};
fetching();
