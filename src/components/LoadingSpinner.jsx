const LoadingSpinner = ({ text = "Loading..." }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-5">
      <div className="loading-car mb-3"></div>
      <p className="text-muted">{text}</p>
    </div>
  )
}

export default LoadingSpinner
