export function mapToAdmin(user) {
    const row = {
        id: user._id,
        first: user.name.first,
        last: user.name.last,
        phone: user.phone,
        email: user.email,
        address: user.address.country + user.address.city + user.address.street,
        isBusiness: user.isBusiness,

    }
    return row
}