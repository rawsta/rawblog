import urljoin from 'url-join'
import moment from 'moment'
import config from '../../data/SiteConfig'

const formatDate = date => moment.utc(date).format(config.dateFormat)

const editOnGithub = post => {
    const date = moment.utc(post.date).format(config.dateFromFormat)
    return urljoin(config.repo, '/blob/master/content/posts', `${date}-${post.slug}.md`)
}

const scrollToCoord = top => {
    // invoke scroll, with behavior smooth (not supported in Safari as of writing)
    window.scroll({
        behavior: 'smooth', // delete this line if you don’t want smooth scrolling
        top,
    })
}

const scrollToHref = href => {
    // destination element to scroll to
    const destinationElement = document.querySelector(href)

    if (destinationElement) {
        scrollToCoord(destinationElement.offsetTop)
    }
}

const scroll = {
    toCoord: scrollToCoord,
    toHref: scrollToHref,
}

// $( window ).on('scroll', function() {

//     if ( 50 < $( document ).scrollTop() ) {
//         $( '.site-header' ).addClass( 'shrink' );
//     } else {
//         $( '.site-header' ).removeClass( 'shrink' );
//     }

// });

export { formatDate, editOnGithub, scroll }
