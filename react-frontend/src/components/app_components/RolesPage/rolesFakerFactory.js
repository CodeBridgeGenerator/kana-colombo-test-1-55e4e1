
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
userId: faker.lorem.sentence(""),
role: faker.lorem.sentence(""),
permission: faker.lorem.sentence(""),
denyAll: faker.lorem.sentence(""),
allow: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
