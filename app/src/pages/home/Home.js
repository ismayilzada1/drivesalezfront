import React, { useEffect } from 'react';
import './Home.css';
import AnnouncementCard from '../../components/ui/announcementCard';
import { Row } from 'react-bootstrap';
import LoadingPage from '../../components/ui/LoadingPage';
import HomeFilter from '../../components/ui/HomeFilter';
import { useDispatch, useSelector } from 'react-redux';
import {GetAllFilterAnnouncements, GetAnnouncements, SetPageNumber} from '../../Store/Announcement/AnnouncementActions';
import InfiniteScroll from 'react-infinite-scroll-component';
import {setAnnouncements, setPageNumber} from '../../Store/Announcement/AnnouncementSlice';

const Home = () => {
    const dispatch = useDispatch();
    const { announcements,filterParams, loading, error, pageNumber,hasMore } = useSelector((state) => state.announcement);

    const pageSize = 4;

    useEffect (() => {
         dispatch(setAnnouncements([]));
         dispatch(setPageNumber(1));
    }, []);

    useEffect(() => {

        if(filterParams){
            dispatch(GetAllFilterAnnouncements(filterParams))
                .then((response) => {})
                .catch((error) => {
                    console.error('Error fetching announcements:', error);
                });
            return;
        }

        dispatch(GetAnnouncements(pageNumber, pageSize))
            .then((response) => {})
            .catch((error) => {
                console.error('Error fetching announcements:', error);
            });
    }, [dispatch, pageNumber, pageSize]);

    const fetchData = () => {
        try {
            if(hasMore){
                console.log('Fetching more data...');
                dispatch(SetPageNumber(pageNumber + 1));
            }
        } catch (error) {
            console.error('Error fetching more data:', error);
        }
    };






    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <Row className="wrapper">
            <HomeFilter />
            <InfiniteScroll
                dataLength={announcements.length}
                next={fetchData}
                hasMore={hasMore}
                scrollThreshold={0.8}
            >
                {loading && pageNumber === 1 ? (
                    <LoadingPage/>
                ) : (

                <div className="container-fluid pt-3">
                    <div className="d-flex flex-row flex-wrap justify-content-start align-items-center announcement-cards-container">
                        {announcements?.map((car, index) => (
                            <div key={index} className="col-lg-3 mb-2">
                                <AnnouncementCard {...car} />
                            </div>
                        ))}
                    </div>
                </div>
                )}

            </InfiniteScroll>
        </Row>
    );
};

export default Home;
