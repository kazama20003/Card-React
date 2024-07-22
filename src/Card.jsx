import Warrior from './assets/Warrior.jpeg'; 
import './index.css'
export const Card = () => {
  return (
    <div className='card'>
        <img className='card-image' src={Warrior} alt="Foto de Perfil" />
        <h2 className='card-title'>Kazama</h2>
        <p className='card-info'>Estudent from developer full stack </p>
    </div>
  )
}
