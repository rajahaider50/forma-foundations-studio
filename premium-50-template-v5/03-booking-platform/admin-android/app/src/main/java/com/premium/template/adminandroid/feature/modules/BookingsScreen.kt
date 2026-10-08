package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun BookingsScreen(onCreate:()->Unit){Card{Column{Text("Bookings");Text("Domain-specific bookings workflow");Button(onClick=onCreate){Text("Create")}}}}
