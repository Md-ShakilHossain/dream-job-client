import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const UserReviews = () => {

    const positiveReview = 85;
    const negativeReview = 15;

    return (
        <div className='mt-12'>
            <div className='flex items-center justify-center gap-12'>
                <div className="text-center w-60">
                    <CircularProgressbar
                        value={positiveReview}
                        text={`${positiveReview}%`}
                        styles={buildStyles({
                            pathColor: `#008000`, // Green path color
                            textColor: '#008000', // Green text color
                        })}
                    />
                    <p className="mt-2 text-2xl font-bold">Positive Users</p>
                </div>
                <div className='w-1/2'>
                    <h2 className='text-3xl font-bold text-center'>Success Rate</h2>
                    <p className='text-justify'>{`With an impressive 85% success rate, our job search web app is a beacon in connecting job seekers with opportunities. This remarkable performance is a direct result of our tireless commitment to providing an intuitive, user-friendly platform that effectively meets the needs of our users. The overwhelmingly positive reviews from 85% of our users confirm the satisfaction and success they experience when searching for a job. Our innovative features, personalized approach and commitment to user satisfaction have earned us trust and praise, making our platform the first choice of job seekers. We are proud to continue to refine and develop our services and our job search experience continues to exceed expectations, reflecting our commitment to helping people plan their careers.`}</p>
                </div>
            </div>
            <div className='flex flex-row-reverse items-center justify-center gap-12 mt-20'>
                <div className="text-center w-60">
                    <CircularProgressbar
                        value={negativeReview}
                        text={`${negativeReview}%`}
                        styles={buildStyles({
                            pathColor: `#FF0000`, // Red path color
                            textColor: '#FF0000', // Red text color
                        })}
                    />
                    <p className="mt-2 text-2xl font-bold">Negative Users</p>
                </div>
                <div className='w-1/2'>
                    <h2 className='text-3xl font-bold text-center'>Failure Rate</h2>
                    <p className='text-justify'>{`Although our job search web app has an ${positiveReview}% success rate, we recognize and value the importance of transparency and report 15% of users have encountered challenges in the job search process. We see this 15% as an opportunity for growth and development as it encourages us to continuously improve our platform to meet the diverse needs of our users. All feedback from this segment is invaluable and provides us with guidance to improve our features and services to better suit a wider range of circumstances. By embracing these insights, we commit to learning from the experiences of the 15% and ensuring that our web application becomes an even more comprehensive and effective resource for all users, ultimately contributing to a higher overall success rate in the future.`}</p>
                </div>
            </div>
        </div>
    );
};

export default UserReviews;