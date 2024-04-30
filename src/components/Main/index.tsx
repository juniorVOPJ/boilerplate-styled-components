import * as S from './styles'

const Main = ({
    title = 'Super Boilerplate JSC 1.0',
    description = 'NextJS, TypeScript, Styled Components e Storybook'
}) => (
    <S.Wrapper>
        <S.Logo
            src="/images/tech_logos.png"
            alt="Imagens de logotipos das tecnologias utilizadas no projeto."
        />
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Illustration
            src="/images/hero-illustration.svg"
            alt="Um desenvolvedor de frente para uma tela com código."
        />
    </S.Wrapper>
)

export default Main
