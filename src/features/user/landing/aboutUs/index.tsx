// MUI Components

import Typography from "@schoolify/core/components/base/inputs/Typography"


const AboutUs = () => {
  // Render
  return (
    <>
      <Typography
        variant='h5'
        fontWeight='bold'
        align='center'
        gutterBottom
        color='text.title'
      >
        درباره اسکولیفای: نوآوری از دل تجربه
      </Typography>
      <Typography variant='body1' align='center' color='text.secondary' mb={6}>
        اسکولیفای، تنها یک سامانه مدیریت مالی نیست؛ بلکه حاصل هم‌افزایی تجربه و
        نوآوری تیمی متخصص است که با درک عمیق نیازهای مراکز آموزشی، به توسعه
        راه‌حلی جامع و کاربردی پرداخته است.
      </Typography>
    </>
  )
}

export default AboutUs
