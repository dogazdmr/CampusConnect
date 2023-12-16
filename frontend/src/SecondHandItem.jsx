import { useParams } from 'react-router-dom';
export default function SecondHandItem() {
    const { id } = useParams()
    console.log("pls")
    return (
      <div>
        <p>This is the rent page.</p>
      </div>
    );
}