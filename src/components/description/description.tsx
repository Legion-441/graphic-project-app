import DescriptionImg from '../../assets/description.jpg';
import styled from 'styled-components'

const DescriptionLayout = styled.div`
    margin-top: 120px;
    margin-left: 80px;
    margin-right: 80px;
`

const DescriptionSection: React.FC = () => {
    return <>
    <DescriptionLayout>
        <div>
            <div className='d-flex justify-content-around new-align'>
                <p className='text-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum culpa a sed eveniet accusamus porro soluta, corporis quis est. Recusandae totam a maiores quidem obcaecati asperiores cum laudantium velit quaerat!</p>
                <img src={DescriptionImg} alt="" className='picture'/>
            </div>
        </div>
        </DescriptionLayout>
    </>
}

export default DescriptionSection;