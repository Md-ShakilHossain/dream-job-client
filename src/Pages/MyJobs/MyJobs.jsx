import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyJobs = () => {

    const { user } = useAuth();
    const [myJobs, setMyJobs] = useState([]);

    const url = `https://dream-jobs-server.vercel.app/alljobs?addedBy=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyJobs(data))

    }, [url])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://dream-jobs-server.vercel.app/alljobs?addedBy=${user.email}&id=${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {

                            const remainingJobs = myJobs.filter(job => job._id !== id);
                            setMyJobs(remainingJobs);
                            Swal.fire(
                                'Deleted!',
                                'Your Cart has been deleted.',
                                'success'
                            )


                        }
                    })

            }
        });

    };



    return (
        <div>
            <Helmet><title>DreamJob | MyJobs</title></Helmet>
            <h1 className="text-center text-4xl text-teal-600 font-bold mt-20">My Jobs</h1>

            {/* <div>
                {
                    error &&
                    <p className="text-red-500 text-xl font-bold text-center mt-5">{error}</p>
                }
            </div> */}

            <Table className="mt-16">
                <Table.Head>
                    <Table.HeadCell>Title</Table.HeadCell>
                    <Table.HeadCell>Author</Table.HeadCell>
                    <Table.HeadCell>Posting Date</Table.HeadCell>
                    <Table.HeadCell>Deadline</Table.HeadCell>
                    <Table.HeadCell>Salary</Table.HeadCell>
                    <Table.HeadCell>Update</Table.HeadCell>
                    <Table.HeadCell>Delete</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        myJobs.map(job => <Table.Row key={job._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {job.jobTitle}
                            </Table.Cell>
                            <Table.Cell>{job.authorName}</Table.Cell>
                            <Table.Cell>{job.postingDate}</Table.Cell>
                            <Table.Cell>{job.deadline}</Table.Cell>
                            <Table.Cell>{job.salaryRange}</Table.Cell>
                            <Table.Cell><Link to={`/update/${job._id}`}><Button >Update</Button></Link></Table.Cell>
                            <Table.Cell><Button onClick={() => handleDelete(job._id)}>Delete</Button></Table.Cell>
                        </Table.Row>)
                    }
                </Table.Body>
            </Table>

        </div>
    );
};

export default MyJobs;