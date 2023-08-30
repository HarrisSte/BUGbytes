import { useState } from 'react';

const SaveCollection () {
  const [saveGame, setSaveGame] = useState([{ game: '' }]);

  const handleGameChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...gameList];
    list[index][name] = value;
    setSaveGame(list);
  };

  const handleGameRemove = (index) => {
    const list = [...gameList];
    list.splice(index, 1);
    setSaveGame(list);
  };

  const handleGameAdd = () => {
    setSaveGame([...gameList, { game: '' }]);
  };
  

  return (
    
  )
}

export default SaveCollection;