import React , {FC, ChangeEvent} from "react";





interface SeachbarProps {
  onSearch: (value: string) => void
}

export const Searchbar: FC<SeachbarProps> = ({ onSearch  }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value:string = event.target.value;
    onSearch(value);
  }

  return (
    <input
      type="search"
      placeholder="Search your Games"
      onChange={handleInputChange}
    />
  );
}

export default Searchbar