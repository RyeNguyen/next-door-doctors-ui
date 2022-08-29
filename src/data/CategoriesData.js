import {FormattedMessage} from "react-intl";

import IconInsight from '../assets/icons/icon-insight--light.svg';
import IconRemote from '../assets/icons/icon-remote--light.svg';
import IconShield from '../assets/icons/icon-shield--light.svg';
import IconResearch from '../assets/icons/icon-research--light.svg';
import IconBrain from '../assets/icons/icon-brain--light.svg';
import IconDental from '../assets/icons/icon-dental--light.svg';
import IconSurgery from '../assets/icons/icon-surgery--light.svg';
import IconCar from '../assets/icons/icon-car--light.svg';
import IconGroup from '../assets/icons/icon-group--light.svg';

const Categories = [
    {
        categoryId: 1,
        categoryNamevi: 'Khám chuyên khoa',
        categoryNameen: 'Specialized examination',
        categoryIcon: IconInsight,
        subCategories: [
            {
                subCategoryId: 1,
                subCategoryName: 'Cơ Xương Khớp',
                subCategoryImg: null
            },
            {
                subCategoryId: 2,
                subCategoryName: 'Thần kinh',
                subCategoryImg: null
            },
            {
                subCategoryId: 3,
                subCategoryName: 'Tiêu hóa',
                subCategoryImg: null
            },
            {
                subCategoryId: 4,
                subCategoryName: 'Tim mạch',
                subCategoryImg: null
            },
            {
                subCategoryId: 5,
                subCategoryName: 'Tai Mũi Họng',
                subCategoryImg: null
            }
        ]
    },
    {
        categoryId: 2,
        categoryNamevi: 'Khám từ xa',
        categoryNameen: 'Remote examination',
        categoryIcon: IconRemote,
        subCategories: [
            {
                subCategoryId: 1,
                subCategoryName: 'Cơ Xương Khớp',
                subCategoryImg: null
            },
            {
                subCategoryId: 2,
                subCategoryName: 'Thần kinh',
                subCategoryImg: null
            },
            {
                subCategoryId: 3,
                subCategoryName: 'Tiêu hóa',
                subCategoryImg: null
            },
            {
                subCategoryId: 4,
                subCategoryName: 'Tim mạch',
                subCategoryImg: null
            },
            {
                subCategoryId: 5,
                subCategoryName: 'Tai Mũi Họng',
                subCategoryImg: null
            }
        ]
    },
    {
        categoryId: 3,
        categoryNamevi: 'Khám tổng quát',
        categoryNameen: 'General examination',
        categoryIcon: IconShield,
        subCategories: [
            {
                subCategoryId: 1,
                subCategoryName: 'Cơ Xương Khớp',
                subCategoryImg: null
            },
            {
                subCategoryId: 2,
                subCategoryName: 'Thần kinh',
                subCategoryImg: null
            },
            {
                subCategoryId: 3,
                subCategoryName: 'Tiêu hóa',
                subCategoryImg: null
            },
            {
                subCategoryId: 4,
                subCategoryName: 'Tim mạch',
                subCategoryImg: null
            },
            {
                subCategoryId: 5,
                subCategoryName: 'Tai Mũi Họng',
                subCategoryImg: null
            }
        ]
    },
    {
        categoryId: 4,
        categoryNamevi: 'Xét nghiệm y học',
        categoryNameen: 'Medial tests',
        categoryIcon: IconResearch,
        subCategories: [
            {
                subCategoryId: 1,
                subCategoryName: 'Cơ Xương Khớp',
                subCategoryImg: null
            },
            {
                subCategoryId: 2,
                subCategoryName: 'Thần kinh',
                subCategoryImg: null
            },
            {
                subCategoryId: 3,
                subCategoryName: 'Tiêu hóa',
                subCategoryImg: null
            },
            {
                subCategoryId: 4,
                subCategoryName: 'Tim mạch',
                subCategoryImg: null
            },
            {
                subCategoryId: 5,
                subCategoryName: 'Tai Mũi Họng',
                subCategoryImg: null
            }
        ]
    },
    {
        categoryId: 5,
        categoryNamevi: 'Sức khỏe tinh thần',
        categoryNameen: 'Mental health',
        categoryIcon: IconBrain,
        subCategories: [
            {
                subCategoryId: 1,
                subCategoryName: 'Cơ Xương Khớp',
                subCategoryImg: null
            },
            {
                subCategoryId: 2,
                subCategoryName: 'Thần kinh',
                subCategoryImg: null
            },
            {
                subCategoryId: 3,
                subCategoryName: 'Tiêu hóa',
                subCategoryImg: null
            },
            {
                subCategoryId: 4,
                subCategoryName: 'Tim mạch',
                subCategoryImg: null
            },
            {
                subCategoryId: 5,
                subCategoryName: 'Tai Mũi Họng',
                subCategoryImg: null
            }
        ]
    },
    {
        categoryId: 6,
        categoryNamevi: 'Khám nha khoa',
        categoryNameen: 'Dental examination',
        categoryIcon: IconDental,
        subCategories: [
            {
                subCategoryId: 1,
                subCategoryName: 'Cơ Xương Khớp',
                subCategoryImg: null
            },
            {
                subCategoryId: 2,
                subCategoryName: 'Thần kinh',
                subCategoryImg: null
            },
            {
                subCategoryId: 3,
                subCategoryName: 'Tiêu hóa',
                subCategoryImg: null
            },
            {
                subCategoryId: 4,
                subCategoryName: 'Tim mạch',
                subCategoryImg: null
            },
            {
                subCategoryId: 5,
                subCategoryName: 'Tai Mũi Họng',
                subCategoryImg: null
            }
        ]
    },
    {
        categoryId: 7,
        categoryNamevi: 'Gói phẫu thuật',
        categoryNameen: 'Surgery packs',
        categoryIcon: IconSurgery,
        subCategories: [
            {
                subCategoryId: 1,
                subCategoryName: 'Cơ Xương Khớp',
                subCategoryImg: null
            },
            {
                subCategoryId: 2,
                subCategoryName: 'Thần kinh',
                subCategoryImg: null
            },
            {
                subCategoryId: 3,
                subCategoryName: 'Tiêu hóa',
                subCategoryImg: null
            },
            {
                subCategoryId: 4,
                subCategoryName: 'Tim mạch',
                subCategoryImg: null
            },
            {
                subCategoryId: 5,
                subCategoryName: 'Tai Mũi Họng',
                subCategoryImg: null
            }
        ]
    },
    {
        categoryId: 8,
        categoryNamevi: 'Sản phẩm y tế',
        categoryNameen: 'Medical products',
        categoryIcon: IconCar,
        subCategories: [
            {
                subCategoryId: 1,
                subCategoryName: 'Cơ Xương Khớp',
                subCategoryImg: null
            },
            {
                subCategoryId: 2,
                subCategoryName: 'Thần kinh',
                subCategoryImg: null
            },
            {
                subCategoryId: 3,
                subCategoryName: 'Tiêu hóa',
                subCategoryImg: null
            },
            {
                subCategoryId: 4,
                subCategoryName: 'Tim mạch',
                subCategoryImg: null
            },
            {
                subCategoryId: 5,
                subCategoryName: 'Tai Mũi Họng',
                subCategoryImg: null
            }
        ]
    },
    {
        categoryId: 9,
        categoryNamevi: 'Sức khỏe doanh nghiệp',
        categoryNameen: 'Enterprise\'s health',
        categoryIcon: IconGroup,
        subCategories: [
            {
                subCategoryId: 1,
                subCategoryName: 'Cơ Xương Khớp',
                subCategoryImg: null
            },
            {
                subCategoryId: 2,
                subCategoryName: 'Thần kinh',
                subCategoryImg: null
            },
            {
                subCategoryId: 3,
                subCategoryName: 'Tiêu hóa',
                subCategoryImg: null
            },
            {
                subCategoryId: 4,
                subCategoryName: 'Tim mạch',
                subCategoryImg: null
            },
            {
                subCategoryId: 5,
                subCategoryName: 'Tai Mũi Họng',
                subCategoryImg: null
            }
        ]
    }
]

export default Categories;