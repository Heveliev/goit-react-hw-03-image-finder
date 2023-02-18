import { Searchbar, SearchForm,SearchFormButton,ButtonLabel,Input } from "./Header.styled"

export const Header = () => {
return (
    <Searchbar>
  <SearchForm>
    <SearchFormButton type="submit">
      <ButtonLabel>Search</ButtonLabel>
    </SearchFormButton>

    <Input
      type="text"
      autocomplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </SearchForm>
</Searchbar>
)

}