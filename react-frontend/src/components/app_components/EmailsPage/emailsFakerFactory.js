
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
fromEmail: faker.lorem.sentence(1),
toEmail: faker.lorem.sentence(1),
subject: faker.lorem.sentence(1),
body: faker.lorem.sentence(1),
time: faker.lorem.sentence(1),
sentStatus: faker.lorem.sentence(1),
readStatus: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
