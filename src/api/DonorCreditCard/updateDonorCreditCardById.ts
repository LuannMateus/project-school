import { TDonorCreditCard } from '../../models/DonorCreditCard';
import { axios } from '../../utils/axios';

export const updateDonorCreditCardById = async (
  id: string,
  donorCreditCard: TDonorCreditCard,
) => {
  try {
    const res = await axios.patch(`/donorCreditCards/${id}`, donorCreditCard);

    const data = await res.data;

    return data;
  } catch (e) {
    console.log(e);
  }
};
