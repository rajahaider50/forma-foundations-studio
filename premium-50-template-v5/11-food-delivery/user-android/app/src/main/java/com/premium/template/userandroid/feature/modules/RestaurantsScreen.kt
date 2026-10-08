package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun RestaurantsScreen(onCreate:()->Unit){Card{Column{Text("Restaurants");Text("Domain-specific restaurants workflow");Button(onClick=onCreate){Text("Create")}}}}
