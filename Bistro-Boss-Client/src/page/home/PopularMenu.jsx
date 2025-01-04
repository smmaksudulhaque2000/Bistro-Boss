import SectionTitle from '../../components/SectionTitle';
import MenuItems from '../../components/MenuItems';

const PopularMenu = ({items, subTitle, heading} = []) => {
    
    
    
        
    return (
        <div className='mb-20 flex flex-col items-center gap-5'>
            {
                subTitle && heading && <SectionTitle subTitle={subTitle} heading={heading}></SectionTitle>
            }
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {
                    items.map( item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <button className='btn btn-outline border-0 border-b-4'>View Full  Menu</button>
        </div>
    );
};

export default PopularMenu;