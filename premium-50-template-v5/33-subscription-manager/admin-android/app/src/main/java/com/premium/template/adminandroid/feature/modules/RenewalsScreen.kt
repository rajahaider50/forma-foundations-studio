package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun RenewalsScreen(onCreate:()->Unit){Card{Column{Text("Renewals");Text("Domain-specific renewals workflow");Button(onClick=onCreate){Text("Create")}}}}
