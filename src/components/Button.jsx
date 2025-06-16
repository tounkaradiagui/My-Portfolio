const Button = ({text, className, id}) => {
  return (
    <a
      className={`${className ?? ''} cta-wrapper`}
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById('counter');
        if (target && id) {
          const offfset = window.innerHeight * 0.15;
          const top = target.getBoundingClientRect().top + window.scrollY - offfset;
          window.scrollTo({
            top: top,
            behavior: 'smooth'
          });
        }
      }}
     >
      <div className='cta-button group'> 
        <div className='bg-circle'/>
        <p className='text'>{text}</p>
        <div className='arrow-wrapper'>
            <img src="/images/arrow-down.svg" alt="arrow"/>
        </div>
      </div>
    </a>
  )
}

export default Button
