import Image from 'next/image';
import GithubLogo from '../../../public/assets/github-logo.jpg';
import JiraLogo from '../../../public/assets/jira-logo.png';
import Link from 'next/link';
const ApplicationsPage = () => {
    return (
        <div className="container mx-auto">
            <div id="card-list" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                <Link href="/applications/github">
                <div id="card" className='bg-white shadow-md rounded-lg p-6 min-w-sm max-w-md hover:shadow-lg hover:shadow-lime-400'>
                    <div>
                        <Image src={GithubLogo} alt="Github Logo" />
                    </div>
                </div>
                </Link>
                <div id="card" className='bg-white shadow-md rounded-lg p-6 min-w-sm max-w-md'>
                    <div>
                        <Image src={JiraLogo} alt="Jira Logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationsPage;