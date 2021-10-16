import { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GiftExpertApp = () => {
  const [categories, setCategoties] = useState(["One Punch"]);

  //--------------------------------------------------
  // Here I need to destructor Here I can bot mutate my Array of useState React way here
  //   const handleAdd = () => {
  //     // setCategoties([...categories, "Super Man"]);

  //     setCategoties((Cats) => [...Cats, "Super Man"]);
  //   };

  //----------------------------------------------------------

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategoties={setCategoties}></AddCategory>
      <hr></hr>
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={categories} />
        ))}
      </ol>
    </>
  );
};

export default GiftExpertApp;
