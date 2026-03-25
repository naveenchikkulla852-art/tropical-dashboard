import React, { useMemo, useState } from 'react';
import useDestinations from '../../hooks/useDestinations';
import { FILTER_TAGS } from '../../utils/constants';
import { filterBySearch, filterByTag } from '../../utils/helpers';
import DestinationCard from './DestinationCard';
import FilterPills from './FilterPills';
import SearchBar from './SearchBar';
import SkeletonCard from '../ui/SkeletonCard';
import styles from './Destinations.module.css';

const PER_PAGE = 6;

function Destinations() {
  const { destinations, loading, error, retry } = useDestinations();
  const [search, setSearch]       = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [page, setPage]           = useState(1);

  
  const availableTags = useMemo(() => {
    const existing = new Set(destinations.map((d) => d.tag));
    return FILTER_TAGS.filter((t) => t === 'All' || existing.has(t));
  }, [destinations]);

  
  const filtered = useMemo(() => {
    const byTag    = filterByTag(destinations, activeTag);
    const bySearch = filterBySearch(byTag, search);
    return bySearch;
  }, [destinations, search, activeTag]);

  
  const visible  = filtered.slice(0, page * PER_PAGE);
  const hasMore  = visible.length < filtered.length;

  const handleSearch = (val) => {
    setSearch(val);
    setPage(1);
  };

  const handleTag = (tag) => {
    setActiveTag(tag);
    setPage(1);
  };

  return (
    <section className={styles.section} id="destinations">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className="section-tag">Destinations</span>
          <h2 className="section-title">
            Explore <em>Paradise</em>
          </h2>
          <p className="section-sub">
            Every destination handpicked for its natural beauty, culture and
            unique experiences.
          </p>
        </div>

    
        <FilterPills
          tags={availableTags}
          activeTag={activeTag}
          onSelect={handleTag}
        />

      
        <SearchBar
          value={search}
          onChange={handleSearch}
          resultCount={filtered.length}
          loading={loading}
        />

      
        {error && (
          <div className={styles.errorState}>
            <span className={styles.errorIcon}>⚠️</span>
            <p>{error}</p>
            <button className="btn-sea" onClick={retry}>Retry</button>
          </div>
        )}

      
        <div className={styles.grid}>
          {loading ? (
            
            Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
          ) : filtered.length === 0 ? (
          
            <div className={styles.emptyState}>
              <span className={`${styles.emptyIcon} float`}>🌊</span>
              <h3 className={styles.emptyTitle}>No such destination</h3>
              <p className={styles.emptySub}>
                Try a different search term or clear your filters.
              </p>
              <button
                className="btn-sea"
                style={{ marginTop: 16 }}
                onClick={() => { setSearch(''); setActiveTag('All'); }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            visible.map((dest, i) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                animationDelay={Math.min((i % PER_PAGE) * 70, 350)}
              />
            ))
          )}
        </div>

        
        {!loading && hasMore && (
          <div className={styles.loadMore}>
            <button
              className="btn-sea"
              style={{ padding: '13px 36px', fontSize: 15 }}
              onClick={() => setPage((p) => p + 1)}
            >
              Load More Destinations
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Destinations;
