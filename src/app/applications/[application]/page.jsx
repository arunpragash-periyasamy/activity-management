const PlatformPage = ({params}) => {
    const {application} = params;
    const urls = {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        jira: 'https://arunpragash46.atlassian.net/jira/your-work',
    }
    return(
        <>
        <h1>{params.application}</h1>
        <div id="platform-view">
        <iframe src={urls[application]} frameborder="0"></iframe>
        </div>
        </>
    )
}

export default PlatformPage;