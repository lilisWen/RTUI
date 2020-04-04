let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
    importAll(require.context('../../../dist/assets/icons/', true, /\.svg$/))
} catch (error) {
    console.log(error)
}