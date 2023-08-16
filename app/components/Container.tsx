interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto  max-w-[2560] px-4 md:px-12 lg:px-20">
      {children}
    </div>
  )
}

export default Container
