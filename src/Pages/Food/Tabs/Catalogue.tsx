import React, { useMemo, useState, useEffect } from "react";
import "./Catalogue.less";
import Header from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import { Button, Divider, Grid, IconButton, Popover, FormGroup, FormControlLabel, Checkbox, Slider, Box, Tooltip } from "@mui/material";
import Basket from '../../../assets/Basket.svg';
import Left from '../../../assets/Left.svg';
import Right from '../../../assets/Right.svg';
import Team from '../../../assets/Team.svg';
import { MealEnum } from "../../../stores/types";
import FoodModal from "../../../components/FoodModal";
import { uiStore } from "../../../stores";
import SoundButton from "../../../components/SoundButton";
import { foodItems, handleFoodName } from "./FoodItems";
import FoodImage from "../../../components/FoodImage";

export default function Catalogue() {
    const navigate = useNavigate();
    const [page, setPage] = useState<number>(0);
    const itemsPerPage = 6;

    const [filtersAnchor, setFiltersAnchor] = useState<HTMLElement | null>(null);
    const [filters, setFilters] = useState({
        vegetarian: false,
        underPrice: false,
        maxPrice: 12,
        meals: {
            breakfast: true,
            lunch: true,
            dinner: true,
            dessert: true,
            drink: true,
        }
    });
    const openFilters = Boolean(filtersAnchor);

    const openFiltersMenu = (e: React.MouseEvent<HTMLElement>) => setFiltersAnchor(e.currentTarget);
    const closeFiltersMenu = () => setFiltersAnchor(null);

    const filteredItems = useMemo(() => {
        return foodItems.filter((it) => {
            if (filters.vegetarian && !it.vegetarian) return false;
            if (filters.underPrice) {
                if (it.price > filters.maxPrice) return false;
            }
            const mealMatches = it.meals.some(m =>
                (m === MealEnum.Breakfast && filters.meals.breakfast) ||
                (m === MealEnum.Lunch && filters.meals.lunch) ||
                (m === MealEnum.Dinner && filters.meals.dinner) ||
                (m === MealEnum.Dessert && filters.meals.dessert) ||
                (m === MealEnum.Drink && filters.meals.drink)
            );
            if (!mealMatches) return false;
            return true;
        });
    }, [foodItems, filters]);

    useEffect(() => {
        setPage(0);
    }, [filters]);

    const totalPages = Math.max(1, Math.ceil(filteredItems.length / itemsPerPage));
    useEffect(() => {
        if (page > totalPages - 1) setPage(totalPages - 1);
    }, [page, totalPages]);

    const pagedItems = filteredItems.slice(page * itemsPerPage, (page + 1) * itemsPerPage);
    const leftItems = pagedItems.slice(0, Math.min(3, pagedItems.length));
    const rightItems = pagedItems.slice(leftItems.length, leftItems.length + 3);

    const [isVisible, setIsVisible] = useState(false);
    const [selectedFood, setSelectedFood] = useState(foodItems[0]);

    return (
        <div className="Catalogue">
            <FoodModal
                isVisible={isVisible}
                closeModal={() => setIsVisible(false)}
                food={selectedFood}
            />
            <Header
                title='Order Food'
                onClickBack={() => navigate('/menu')}
                color='black'
            />
            <div className="content" >
                <div className="book" >
                    <div className="left">
                        <div className="food-list">
                            {leftItems.map((item, index) => (
                                <div key={index} className="food-item">
                                    <Grid container spacing={2}>
                                        <Grid size={5}>
                                            <FoodImage type="small" name={item.name} />
                                        </Grid>
                                        <Grid size={7} className="item-content">
                                            <div className="item-name">{item.name}</div>
                                            <div className="item-description">{item.description}</div>
                                            <div className="item-price">{item.price}€</div>
                                            <div className="item-actions">
                                                <IconButton
                                                    onClick={() => {
                                                        setSelectedFood(item);
                                                        setIsVisible(true);
                                                    }}
                                                >
                                                    <Basket />
                                                </IconButton>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Divider style={{ margin: '10px 0' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="right">
                        <div className="food-list">
                            {rightItems.map((item, index) => (
                                <div key={index} className="food-item">
                                    <Grid container spacing={2}>
                                        <Grid size={5}>
                                            <FoodImage type="small" name={item.name} />
                                        </Grid>
                                        <Grid size={7} className="item-content">
                                            <div className="item-name">{item.name}</div>
                                            <div className="item-description">{item.description}</div>
                                            <div className="item-price">{item.price}€</div>
                                            <div className="item-actions">
                                                <IconButton
                                                    onClick={() => {
                                                        setSelectedFood(item);
                                                        setIsVisible(true);
                                                    }}
                                                >
                                                    <Basket />
                                                </IconButton>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Divider style={{ margin: '10px 0' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <SoundButton
                        variant="contained"
                        color="info"
                        onClick={() => uiStore.setCurrentTab(2)}
                        sound="Click"
                    >
                        <Team /> Message Us
                    </SoundButton>
                    <div>
                        <Tooltip title="Previous page">
                            <span>
                                <IconButton
                                    size="small"
                                    onClick={() => setPage(p => Math.max(0, p - 1))}
                                    disabled={page <= 0}
                                >
                                    <Left />
                                </IconButton>
                            </span>
                        </Tooltip>

                        <Button variant="contained" color="error" onClick={openFiltersMenu} sx={{ mx: 1 }}>
                            Filters
                        </Button>

                        <Tooltip title="Next page">
                            <span>
                                <IconButton
                                    size="small"
                                    onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                                    disabled={page >= totalPages - 1}
                                >
                                    <Right />
                                </IconButton>
                            </span>
                        </Tooltip>

                        <Popover
                            open={openFilters}
                            anchorEl={filtersAnchor}
                            onClose={closeFiltersMenu}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                        >
                            <Box className="filters">
                                <div className="title">Filters</div>
                                <Box sx={{ mt: 1 }}>
                                    <div className="subtitle">Meal types</div>
                                    <FormGroup row>
                                        <FormControlLabel
                                            control={<Checkbox checked={filters.meals.breakfast} onChange={() => setFilters(f => ({ ...f, meals: { ...f.meals, breakfast: !f.meals.breakfast } }))} />}
                                            label="Breakfast"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={filters.meals.lunch} onChange={() => setFilters(f => ({ ...f, meals: { ...f.meals, lunch: !f.meals.lunch } }))} />}
                                            label="Lunch"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={filters.meals.dinner} onChange={() => setFilters(f => ({ ...f, meals: { ...f.meals, dinner: !f.meals.dinner } }))} />}
                                            label="Dinner"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={filters.meals.dessert} onChange={() => setFilters(f => ({ ...f, meals: { ...f.meals, dessert: !f.meals.dessert } }))} />}
                                            label="Dessert"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={filters.meals.drink} onChange={() => setFilters(f => ({ ...f, meals: { ...f.meals, drink: !f.meals.drink } }))} />}
                                            label="Drink"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={filters.vegetarian} onChange={() => setFilters(f => ({ ...f, vegetarian: !f.vegetarian }))} />}
                                            label="Vegetarian only"
                                        />
                                    </FormGroup>
                                </Box>

                                <Box sx={{ mt: 1 }}>
                                    <div className="subtitle">Max price</div>
                                    <Slider
                                        value={filters.maxPrice}
                                        min={5}
                                        max={25}
                                        step={1}
                                        onChange={(_, v) => setFilters(f => ({ ...f, maxPrice: Array.isArray(v) ? v[0] : v }))}
                                        valueLabelDisplay="auto"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={filters.underPrice} onChange={() => setFilters(f => ({ ...f, underPrice: !f.underPrice }))} />}
                                        label={`Under ${filters.maxPrice}€`}
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                                    <Button size="small" onClick={() => setFilters({ vegetarian: false, underPrice: false, maxPrice: 12, meals: { breakfast: true, lunch: true, dinner: true, dessert: true, drink: true } })}>Reset</Button>
                                    <Button size="small" variant="contained" onClick={closeFiltersMenu}>Apply</Button>
                                </Box>
                            </Box>
                        </Popover>
                    </div>
                    <SoundButton variant="contained" color="primary" onClick={() => uiStore.setCurrentTab(1)} sound="Click">
                        Go to Basket
                    </SoundButton>
                </div>
            </div>

        </div>
    );
}