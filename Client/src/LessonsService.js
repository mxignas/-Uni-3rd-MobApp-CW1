const url = 'http://localhost:5000/api/lessons';

class LessonsService {
    // Get Lessons
    static getLessons() { // static because we do not need to instantiate a Post object to be able to use this
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch.get(url);
                const data = res.data;
                // if successfull
                resolve(
                    // will loop through set of data
                    data.map(lesson => ({
                        ...lesson,
                        createdAt: new Date(lesson.createdAt)
                    }))
                );
            } catch(err) {
                reject(err);
            }
        })
    }

    // Post Lessons

    // Put Lessons

    // Delete Lessons
}