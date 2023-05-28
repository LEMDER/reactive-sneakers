import Card from '../components/Card';

function Home({items, searchValue, setSearchValue, onChangeSearchInput, onAddToCart}){
    console.log(items);
    return(
        <>
        {
          items && (<>
          <div className="content">
          <div className="search-flex">
            <h1>{searchValue ? `Search for "${searchValue}"`: 'All sneakers'}</h1>
            {/* All sneakers */}
            <div className="search-block">
              <img src="/img/search.svg" alt="Search" />
              <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..."/>
            </div>
          </div>
  
          <div className="sneakers">
            {
              items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
                <Card 
                key={index}
                title = {item.title}
                price = {item.price}
                imageUrl = {item.imageUrl}
                onClickFavorite = {() => console.log('You clicked HEART')} 
                onClickPlus = {(obj) => onAddToCart(obj)}/>
              ))
            }
          </div>
  
  
        </div>
        </>)
        }
        </>
        
    );
}

export default Home;