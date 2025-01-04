import SectionTitle from '../../components/SectionTitle';
import MenuItems from '../../components/MenuItems';
import { Link } from 'react-router-dom';
import Cover from '../../components/Cover';

const PopularMenu = ({items, subTitle, heading, image, title, discription} = []) => {
    console.log(items);
    
    
    
        
    return (
        <div className='mb-20 flex flex-col items-center gap-5'>
            {
                subTitle && heading && <SectionTitle subTitle={subTitle} heading={heading}></SectionTitle>
            }
            {
                title && discription && image && <Cover
                        image={image}
                        title={title}
                        discription={discription}
                      ></Cover>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {
                    items.map( item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <Link to={`/order/${title}`}>
            <button className='btn btn-outline border-0 border-b-4'>View Full  Menu</button>
            </Link>
        </div>
    );
};

export default PopularMenu;