package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun ItineraryScreen(onCreate:()->Unit){Card{Column{Text("Itinerary");Text("Domain-specific itinerary workflow");Button(onClick=onCreate){Text("Create")}}}}
